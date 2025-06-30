use sqlx::PgPool; 

use crate::modules::textbooks::entity::{Textbook, NewTextbook};
use crate::modules::textbooks::dto::input::CreateTextbookDto;
use crate::modules::textbooks::dto::output::TextbookResponseDto;
use crate::error::AppError;

pub async fn get_textbook_by_id(
    db: &PgPool,
    id: i32,
) -> Result<TextbookResponseDto, AppError> {
    let tb = sqlx::query_as!(Textbook, r#"
        SELECT id, title, description, level, is_active
        FROM textbooks
        WHERE id = $1
    "#, id)
    .fetch_optional(db)
    .await
    .map_err(|err| AppError::Database(err.to_string()))?; // если сломалась БД

    let tb = tb.ok_or(AppError::NotFound(format!("Textbook with id={} not found", id)))?;

    Ok(tb.into())
}
