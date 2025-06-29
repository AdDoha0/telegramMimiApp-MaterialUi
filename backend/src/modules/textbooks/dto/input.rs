use serde::Deserialize;

#[derive(Debug, Deserialize)]
pub struct CreateTextbookDto {
    pub title: String,
    pub description: Option<String>,
    pub level: Option<String>
}