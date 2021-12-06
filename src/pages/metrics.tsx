import { NextPage } from 'next'
import { setupApiClient } from '../services/api'
import { withSSRAuth } from '../utils/withSSRAuth'

const Metrics: NextPage = () => {
  return (
    <>
      <h1>Metrics</h1>
    </>
  )
}

export const getServerSideProps = withSSRAuth(
  async ctx => {
    const apiClient = setupApiClient(ctx)
    const response = await apiClient.get('/me')

    return {
      props: {},
    }
  },
  {
    permissions: ['metrics.list'],
    roles: ['administrator'],
  },
)

export default Metrics
