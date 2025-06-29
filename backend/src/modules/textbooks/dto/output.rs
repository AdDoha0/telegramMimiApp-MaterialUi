use serde::Serialize;


#[derive(Debug, Serialize)]
pub struct TextbookResponseDto { 
    pub id: i32,
    pub title: String, 
    pub description: Option<String>,
    pub level: Option<String>,
    pub is_active: bool,
}