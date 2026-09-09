#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::{Manager, CustomMenuItem, SystemTray, SystemTrayEvent, SystemTrayMenu};

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![ping, app_info])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

#[tauri::command]
fn ping() -> String {
    "pong".into()
}

#[tauri::command]
fn app_info() -> String {
    format!("Veltrix Tauri backend (stub)")
}
