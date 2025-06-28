use std::env;

use axum::{routing::get, Router};
use sqlx::PgPool;
use tokio::net::TcpListener;






#[derive(Clone)]
struct AppState {
    dp_pool: PgPool
}


async fn root() -> &'static str {
    "Items Api)"
}


#[tokio::main]
async fn main() {

    println!("http://localhost:2000/");


    dotenv::dotenv().ok(); 
    let database_url = env::var("DATABASE_URL").expect("Connect database url!");

    let db_pool = PgPool::connect(&database_url)
        .await
        .expect("Failed to connect to Postgres");

    let app  = Router::new()
        .route("/", get(root))
        .with_state(AppState { dp_pool: db_pool });

    let listener = TcpListener::bind("0.0.0.0:2000").await.unwrap();
    axum::serve(listener, app).await.unwrap();

}
