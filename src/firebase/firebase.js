import firebaseConfig from "./config";
import { initializeApp } from "firebase/app";
import "firebase/auth";

class Firebase {
  constructor() {
    const app = initializeApp(firebaseConfig);
    this.auth = app.auth();
  }

  async register(name, email, password) {
    const newUser = await this.auth.createUserWithEmailAndPassword(
      email,
      password
    );
    return await newUser.user.updateProfile({
      displayName: name,
    });
  }
  async login(email, password) {
    return await this.auth.signInWithEmailAndPassword(email, password);
  }
}
const firebase = new Firebase();
export default firebase;
