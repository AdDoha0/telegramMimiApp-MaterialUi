use sqlx::PgPool;

#[derive(Clone)]
pub struct AppState {
    pub dp_pool: PgPool
}