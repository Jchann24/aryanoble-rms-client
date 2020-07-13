export default function({ app, redirect }) {
  if (app.$auth.user.group_id === 2) {
    return redirect('/admin')
  } else if (app.$auth.user.group_id === 3) {
    return redirect('/pic')
  } else if (app.$auth.user.group_id === 4) {
    return redirect('/div')
  } else if (app.$auth.user.group_id === 5) {
    return redirect('/candidate')
  }
}
