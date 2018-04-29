export default function ({ store, redirect, error, req }) {
    if (!store.state.auth.authenticated) {
        redirect('/login')
    }
}
