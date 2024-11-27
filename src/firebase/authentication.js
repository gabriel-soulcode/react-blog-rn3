import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup
} from "firebase/auth";
import app from "./firebase.config";

const auth = getAuth(app);

async function login(email, senha) {
    const credencial = await signInWithEmailAndPassword(auth, email, senha);
    return credencial.user;
}

async function loginGoogle() {
    const provedor = new GoogleAuthProvider();
    const credencial = await signInWithPopup(auth, provedor);
    return credencial.user;
}

async function cadastrar(email, senha) {
    const credencial = await createUserWithEmailAndPassword(auth, email, senha);
    return credencial.user;
}

export { login, loginGoogle, cadastrar };