import { CartStorageService } from "../application/ports";
import { utilizeStore } from "./store";

export function utilizeCartStorage(): CartStorageService {
  return utilizeStore()
}