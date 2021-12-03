import type { NextPage } from 'next'
import { useContext, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import styles from '../styles/Home.module.css'
import { withSSRGuest } from '../utils/withSSRGuest'

const Home: NextPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useContext(AuthContext)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const data = {
      email,
      password,
    }

    await signIn(data)
  }

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.currentTarget.value)}
      />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.currentTarget.value)}
      />
      <button type="submit">Entrar</button>
    </form>
  )
}

export const getServerSideProps = withSSRGuest(async ctx => {
  return {
    props: {},
  }
})

export default Home
