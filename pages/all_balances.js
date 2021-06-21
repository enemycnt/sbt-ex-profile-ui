import { useState, useEffect } from 'react'
import useSWR from 'swr'
import styles from '../styles/Home.module.css'

import Portfolio from '../components/Portfolio'
import Positions from '../components/Positions'

const fetcher = url => fetch(url).then(r => r.json())

export default function AllBalances() {
  const { data, error } = useSWR('/api/v1/extended/profile', fetcher)
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return (
    <div className="container mx-auto px-4">
      <main className={styles.main}>
        <div className="flex flex-col gap-5">
          {data.map(portfolio => (
            <Portfolio key={portfolio.profile.id} portfolio={portfolio} />
          ))}
        </div>
      </main>
    </div>
  )
}
