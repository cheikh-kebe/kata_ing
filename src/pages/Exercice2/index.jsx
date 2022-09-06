import React from 'react';
//hooks
import { useFetchData } from '../../app/Hooks/useFetchData';
//styles
import './exercice2.styles.scss'

export const Exercice2 = () => {
  const { state, error } = useFetchData();
  if (error) return <div>Oulala, il y a un problème</div>;
  
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

