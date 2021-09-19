import React from 'react';
import CodeForm from '../../components/CodeForm/CodeForm';
import Header from '../../components/Header/Header';
import HeaderSpacer from '../../components/HeaderSpacer/HeaderSpacer';
import Navigation from '../../components/Navigation/Navigation';
import styles from './AddCard.module.css';

export default function AddCard(): JSX.Element {
  return (
    <div className={styles.container}>
      <section className={styles.headerSection}>
        <Header>
          Add
          <HeaderSpacer />
          NewCard
        </Header>
      </section>
      <CodeForm
        className={styles.codeForm}
        handleSubmit={() => console.log('Submitted')}
        children="Add new Card"
        onChange={(event) => console.log(event.target.value)}
      />
      <section className={styles.navSection}>
        <Navigation activeLink="add" />
      </section>
    </div>
  );
}
