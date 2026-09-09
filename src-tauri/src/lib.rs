use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct StatusMessage {
    pub msg: String,
}

pub fn hello() -> String {
    "veltrix backend ready".into()
}
