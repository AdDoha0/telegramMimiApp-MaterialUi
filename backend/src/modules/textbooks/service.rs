use sqlx::PgPool; 

use crate::modules::textbooks::entity::{Textbook, NewTextbook};
use crate::modules::textbooks::dto::input::{CreateTextbookDto, UpdateTextbookDto};
use crate::modules::textbooks::dto::output::TextbookResponseDto;
use crate::error::AppError;


// Response (Ответ) Request (Запрос)


pub async fn create_textbook(
    db: &PgPool,
    dto: CreateTextbookDto
) -> Result<TextbookResponseDto, AppError> {
    let new_tb = NewTextbook::from(dto);

    let result = sqlx::query_as!(
        Textbook, 
        r#"
        INSERT INTO textbooks (title, description, level, is_active)
        VALUES ($1, $2, $3, $4)
        RETURNING id, title, description, level, is_active
        "#,
        new_tb.title,
        new_tb.description,
        new_tb.level,
        new_tb.is_active
    )
    .fetch_one(db)
    .await
    .map_err(|e| AppError::Database(e.to_string()))?;

    Ok(result.into())
}


pub async fn get_textbook_by_id(
    db: &PgPool,
    id: i32,
) -> Result<TextbookResponseDto, AppError> {
    
    let result = sqlx::query_as!(Textbook, r#"
        SELECT id, title, description, level, is_active
        FROM textbooks
        WHERE id = $1
    "#, id)
    .fetch_optional(db)
    .await
    .map_err(|err| AppError::Database(err.to_string()))?; 

    let result = result.ok_or(AppError::NotFound(format!("Textbook with id={} not found", id)))?;

    Ok(result.into())
}


pub async fn list_textbooks(db: &PgPool) -> Result<Vec<TextbookResponseDto>, AppError> {

    let result = sqlx::query_as!(Textbook, 
    r#"SELECT id, title, description, level, is_active FROM textbooks ORDER BY id DESC"#)
        .fetch_all(db)
        .await
        .map_err(|err| AppError::Database(err.to_string()))?;

    
    Ok(result.into_iter().map(Into::into).collect())
}


// pub async fn update_textbook(
//     db: &PgPool,
//     id: i32,
//     dto: UpdateTextbookDto,
// ) -> Result<TextbookResponseDto, AppError> {}



pub async fn delete_textbook(db: &PgPool, id: i32) -> Result<(), AppError> {
    let result = sqlx::query!(
        r#"DELETE FROM textbooks WHERE id = $1"#,
        id
    )
    .execute(db)
    .await
    .map_err(|e| AppError::Database(e.to_string()))?;

    if result.rows_affected() == 0 {
        return Err(AppError::NotFound(format!("Textbook with id={} not found", id)));
    }

    Ok(())
}