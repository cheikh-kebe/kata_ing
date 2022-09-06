import React from 'react';
import { useFetchData } from '../../app/Hooks/useFetchData';
import './exercice2.styles.scss'

export const Exercice2 = () => {
  const { state, error } = useFetchData()
  if (error) return <div>Oulala, il y a un problème</div>;
  console.log(state.data);
  return (
    <>
      {state.data && state.data.map((user) => (
        <div key={user.id} className="user">
            <h1>Login: {user.login}</h1>
            <img src={user.avatar_url} alt="" />
              <p>link to : 
                <a href={user.url}>
                 {user.login}
                </a>
              </p>
        </div>
      ))}
    </>
  )
}

