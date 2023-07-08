import Head from 'next/head'
import styled from '@emotion/styled'
import CoachLesson from '@components/home/CoachLesson'
import PreDashBoard from '@components/home/PreDashBoard'
import Sales from '@components/home/Sales'

export default function Home() {

  return (
    <>
      <Head>
        <title>테니스 닥터 - 홈</title>
      </Head>
      <PreDashBoard />
      <ItemLists>
        <CoachLesson />
        <Sales />
      </ItemLists>
    </>
  )
};

const ItemLists = styled.ul({
  display: "flex",
})