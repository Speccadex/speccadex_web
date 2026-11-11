/// <reference types="vite/client" />

// A .env fájlból érkező változók típusai (lásd .env.example).
// Új VITE_ változó felvételekor itt is add hozzá.
interface ImportMetaEnv {
  readonly VITE_API_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
