# Veltrix — React + Tauri 2 + Rust

This is the new Java-free desktop architecture for Veltrix.

## Stack
- React 19 + TypeScript
- Vite
- Tauri 2
- Rust
- SHA-256 via `sha2`
- Recursive scanning via `walkdir`

## Explicitly removed
Java, JavaFX, Maven, Gradle, FXML, `pom.xml`, and `module-info.java` are not part of this project.

## Development
Install Node.js, Rust, and Tauri prerequisites for your operating system.

```bash
npm install
npm run tauri dev
```

## Release
```bash
npm run build
npm run tauri build
```

The Tauri bundle can produce Windows installers/executables according to the configured bundle targets.

## Current transfer engine
The Rust backend provides recursive scan, resumable `.veltrix-part` copying, pause/resume/cancel commands, conflict-safe renaming, move mode, progress events, and optional SHA-256 verification.

## Windows build

See `BUILD-WINDOWS.md`. The project is Java-free and builds with Node.js + Rust/Tauri only.
