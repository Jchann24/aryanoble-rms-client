export default function({ app, redirect }) {
  if (app.$auth.user.groups[0] !== 1) {
    return redirect('/')
  }
}
