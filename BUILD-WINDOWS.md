# Veltrix — Windows Build

## Requirements

- Windows 10/11 64-bit
- Node.js 22 LTS
- Rust stable (MSVC toolchain)
- Microsoft Visual Studio Build Tools with **Desktop development with C++**
- WebView2 Runtime (normally present on Windows 10/11)

**Java is NOT required.** Veltrix does not use Java, JavaFX, Maven, or Gradle.

## Local build

Open PowerShell in the project folder:

```powershell
npm install
npm run check
npm run build
npm run tauri:dev
```

For installers:

```powershell
npm run tauri:build
```

Output:

```text
src-tauri/target/release/bundle/msi/
src-tauri/target/release/bundle/nsis/
```

## GitHub Actions

The included workflow:

```text
.github/workflows/build-windows.yml
```

builds the project on `windows-latest` and uploads both MSI and NSIS EXE artifacts.

No Java installation or Java build step is used.
