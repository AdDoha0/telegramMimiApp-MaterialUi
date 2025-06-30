use axum::{extract::{State, Path}, response::IntoResponse, Json};
use crate::{
    AppState,
    error::AppError,
    modules::textbooks::{
        dto::input::{CreateTextbookDto, UpdateTextbookDto},
        service::{
            create_textbook,
            delete_textbook,
            get_textbook_by_id,
            list_textbooks,
            // update_textbook,
        },
    },
};

pub async create_textbook_handler(
    State(state)
)


pub async fn get_textbook_handler(
    State(state): State<AppState>,
    Path(id): Path<i32>,
) -> Result<impl IntoResponse, AppError> {
    let result = get_textbook_by_id(&state.dp_pool, id).await?;
    Ok(Json(result))
}
