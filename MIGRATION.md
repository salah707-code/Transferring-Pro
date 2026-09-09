# JavaFX → React/Tauri migration

| JavaFX | New implementation |
|---|---|
| `MainView.java` | React components + CSS |
| `MainController.java` | React state + Tauri commands/events |
| `TransferEngine.java` | Rust transfer engine |
| `VerificationService.java` | Rust SHA-256 |
| `LocalizationService.java` | React locale objects (next step: i18n package) |
| JavaFX properties/events | React state + Tauri event channel |
| JavaFX CSS | Web CSS |
| Maven/JDK | npm + Rust/Cargo |

No Java runtime is required by the new architecture.
