import firebaseConfig from "./config";
import { initializeApp } from "firebase/app";
import "firebase/auth";

class Firebase {
  constructor() {
    const app = initializeApp(firebaseConfig);
    this.auth = app.auth();
  }
  // register function
  async register(name, email, password) {
    const newUser = await this.auth.createUserWithEmailAndPassword(
      email,
      password
    );
    return await newUser.user.updateProfile({
      displayName: name,
    });
  }
  //login function
  async login(email, password) {
    return await this.auth.signInWithEmailAndPassword(email, password);
  }

  //logout function
  async logout() {
    await this.auth.signOut();
  }
  async resetPassword(email) {
    await this.auth.sendPasswordResetEmail(email);
  }
}
const firebase = new Firebase();
export default firebase;
