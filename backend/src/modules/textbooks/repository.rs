use sqlx::PgPool;

use crate::modules::textbooks::entity::{Textbook, NewTextbook};
use crate::modules::textbooks::dto::input::{CreateTextbookDto, UpdateTextbookDto};
use crate::modules::textbooks::dto::output::TextbookResponseDto;
use crate::error::AppError;

pub async fn insert_textbook(
    db: &PgPool,
    title: String,
    description: Option<String>,
    level: Option<String>,
    is_active: bool,
) -> Result<Textbook, AppError> {
    let result = sqlx::query_as!(
        Textbook,
        r#"
        INSERT INTO textbooks (title, description, level, is_active)
        VALUES ($1, $2, $3, $4)
        RETURNING id, title, description, level, is_active
        "#,
        title,
        description,
        level,
        is_active
    )
    .fetch_one(db)
    .await
    .map_err(|e| AppError::Database(e.to_string()))?;

    Ok(result)
}

pub async fn select_textbook_by_id(
    db: &PgPool,
    id: i32
) -> Result<Option<Textbook>, AppError> {
    let result = sqlx::query_as!(
        Textbook, 
        r#"
        SELECT id, title, description, level, is_active
        FROM textbooks
        WHERE id = $1
        "#,
        id
    )
    .fetch_optional(db)
    .await
    .map_err(|e| AppError::Database(e.to_string()))?;

    Ok(result)
}

pub async fn select_all_textbooks(
    db: &PgPool,
) -> Result<Vec<Textbook>, AppError> {
    let result = sqlx::query_as!(
        Textbook,
        r#"
        SELECT id, title, description, level, is_active
        FROM textbooks
        ORDER BY id DESC
        "#
    )
    .fetch_all(db)
    .await
    .map_err(|e| AppError::Database(e.to_string()))?;

    Ok(result)
}

pub async fn delete_textbook_by_id(
    db: &PgPool,
    id: i32,
) -> Result<u64, AppError> {
    let result = sqlx::query!(
        r#"DELETE FROM textbooks WHERE id = $1"#,
        id
    )
    .execute(db)
    .await
    .map_err(|e| AppError::Database(e.to_string()))?;

    Ok(result.rows_affected())
}


