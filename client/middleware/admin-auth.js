export default async function({$auth, redirect}) {
  if(!$auth.user.isAdmin) {
    redirect('/')
  }
}