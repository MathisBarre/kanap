import { Notifier } from "../application/ports"

const notifierAdaptater: Notifier = {
  notify(message: string) {
    alert(message)
  }
}

export default notifierAdaptater