export default function ({ store, redirect }) {
    if (!store.state.auth) {
        /*redirect({
            message: 'You are not connected',
            statusCode: 403
        })*/
        redirect('/login')
    } else {
        redirect('/')
    }
}