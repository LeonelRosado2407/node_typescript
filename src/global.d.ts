//file to import express-session types and extend the SessionData interface

import "express-session";

declare module "express-session" {
  interface SessionData {
    userId?: string;
  }
}