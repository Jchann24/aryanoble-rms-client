export default function({ app, redirect }) {
  if (app.$auth.user.groups[0] === 2) {
    return redirect('/pic')
  } else if (app.$auth.user.groups[0] === 3) {
    return redirect('/div')
  }
}
