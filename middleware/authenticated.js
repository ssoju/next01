export default function ({ store, redirect }) {
    if (!store.state.auth.authenticated) {
        /*redirect({
            message: 'You are not connected',
            statusCode: 403
        })*/
        redirect('/login')
    } else {
        redirect('/')
    }
}