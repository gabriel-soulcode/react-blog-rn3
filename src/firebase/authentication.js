import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut
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

async function usuarioLogado(alternarUsuario) {
    onAuthStateChanged(auth, alternarUsuario); // observable
}

async function logout() {
    await signOut(auth);
}

export {
    login,
    loginGoogle,
    cadastrar,
    usuarioLogado,
    logout
};