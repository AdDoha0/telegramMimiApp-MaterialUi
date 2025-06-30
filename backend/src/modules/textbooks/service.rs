use sqlx::PgPool; 

use crate::modules::textbooks::entity::{Textbook, NewTextbook};
use crate::modules::textbooks::dto::input::CreateTextbookDto;
use crate::modules::textbooks::dto::output::TextbookResponseDto;


pub async fn create_textbook(
    dp: &PgPool,
    dto: CreateTextbookDto
) -> Result<TextbookResponseDto, (axum::http::StatusCode, String)> {
    
}