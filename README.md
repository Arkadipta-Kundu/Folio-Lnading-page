# Folio Code

Folio Code connects a page in your physical notebook to a Markdown note on your Windows laptop. Each saved note gets a permanent four-character code you can write in the margin. Enter that code in Folio to open the note, even offline.

## Try it with one notebook page

Suppose you’ve written out how binary search works, but the Java implementation won’t fit on the page.

1. Open Folio and press **Ctrl+N**. Paste the implementation into a new note. Give it a title or add a tag such as `java` if you like.
2. Press **Ctrl+S**. Folio saves the note and opens it in read mode. If its code is `k7p2`, write **[k7p2]** beside your handwritten explanation.
3. Later, press **Ctrl+K**, type `k7p2`, and press **Enter**. You can revise the implementation as often as you like. The code on paper still works.

Folio assigns the code on the first meaningful save or autosave. Leaving an untouched draft creates no library entry. Deleting a saved note keeps its code reserved so an old handwritten reference can never point to an unrelated note.

## Writing and finding notes

- **Markdown** supports headings, nested lists, tables, links, and fenced code blocks. Autosave keeps you in the editor. An explicit save opens the rendered note.
- **All notes** searches titles, content, codes, tags, and source details. Combine a tag with a quoted phrase to narrow the results. Use this view for a four-letter word such as `java`, since Find treats four alphanumeric characters as a note code.
- **Linked notes** use double brackets. Write `[[k7p2]]` inside another digital note to create a clickable reference. Open **Connected notes** to see which notes link back.
- **Quick capture** opens an Inbox draft with **Ctrl+Shift+N**. Organize it later with tags, favorites, or archive.
- **Reading preferences** include light, dark, and system themes. In Settings, adjust note text from 12 to 26 pixels for both reading and writing.

## Install on Windows

Folio Code targets Windows 10 and 11 on x64 PCs. If you have the installer, run the file ending in `-setup.exe`, then open **Folio Code** from Start. Setup may need internet to install Microsoft Edge WebView2. Once installed, you can write, search, and retrieve local notes offline without an account.

If you have the source ZIP, the included [Windows setup guide](START-HERE-WINDOWS.md) explains how to generate the installer with GitHub Actions. Run **Build Windows installer**, download the **Folio-Code-Windows-Installer** artifact from the successful run, and extract the setup executable. The build produces an unsigned installer.

## Back up and restore your notebook references

Folio stores notes in a local SQLite database. **Settings → Local data & recovery** shows its location. Before uninstalling or moving computers, choose **Settings → Export JSON** and keep the file somewhere you can access afterward. A full JSON backup preserves note codes, Markdown, tags, timestamps, and reserved codes. You can also export an individual note as Markdown.

To restore a library, choose **Import / restore JSON**, review the preview, and select how to handle existing notes. The default merge keeps existing notes. Replacement creates a local recovery snapshot before applying changes.

For automatic off-device backups, connect a private GitHub repository in Settings. The token is stored in Windows Credential Manager. Use **Back up now** and check the last successful backup time before relying on that copy. On a new installation, **Preview remote backup** lets you review and restore it. See [Backup and restore](docs/BACKUP_AND_RESTORE.md) for permissions and conflict handling.

## Develop locally

The desktop app uses Tauri 2, Rust, TypeScript, and SQLite with FTS5 search. The Rust core lives in `core/`, the interface in `src/`, and Windows integration in `src-tauri/`.

On Windows, install Node.js 22.12 or later, Rust stable with the MSVC toolchain, Visual Studio Build Tools with **Desktop development with C++** and a Windows SDK, and WebView2. From the project root, run:

```powershell
npm ci
npm run tauri -- dev
```

Run the frontend and database tests with:

```powershell
npm test
cargo test -p folio-core --locked
```

To build the Windows installer locally, run `.\scripts\build-windows.ps1`. The script writes the setup executable to `target\release\bundle\nsis\`.

For the changes and verification results in version **0.1.1**, see the [release notes](docs/UX-UPDATE-0.1.1.md).
