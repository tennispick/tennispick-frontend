import { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';

import { NoResult, InlineImageDiv, CardList, Button } from '@components/index';
import { coachList } from 'src/mocks/data';
import {
  ProfileManIcon,
  CallBlackIcon,
  GuideBlackIcon,
  MailBlackIcon,
  SupportAgentBlackIcon,
} from '@icons/index';
import { css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';
import Image from 'next/image';

const CoachList = () => {
  // TODO Mocks Data
  const [data] = useState<Array<{ [key: string]: string | number }>>(coachList);

  return (
    <>
      {data && data.length > 0 ? (
        <ul
          className={flex({
            flexWrap: 'wrap',
            height: '80%',
            overflowY: 'scroll',
            padding: '0 0 24px 0',
          })}
        >
          {data.map((item) => {
            return (
              <CardList key={uuidV4()} minHeight={'390px'}>
                <div
                  className={css({
                    height: '30%',
                    borderRadius: '25px 25px 0px 0px',
                    background: '#EBF9FF',
                  })}
                />
                {/* Profile Image */}
                <div
                  className={css({
                    position: 'absolute',
                    width: '120px',
                    height: 'auto',
                    top: '25%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    borderRadius: '25px 25px 0px 0px',
                  })}
                >
                  <Image
                    src={ProfileManIcon}
                    alt="profile man"
                    placeholder="empty"
                    priority={true}
                  />
                </div>
                <div
                  className={css({
                    height: 'calc(70% - 42px)',
                    margin: '42px 0 0 0',
                    padding: '8px 24px 0 24px',
                  })}
                >
                  <div
                    className={css({
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      margin: '0 0 12px 0',
                      textAlign: 'center',
                    })}
                  >
                    {item.name}&#40;{item.age}&#44; {item.sex}&#41;
                  </div>
                  <div
                    className={css({
                      lineHeight: '1.7rem',
                      fontSize: '0.95rem',
                    })}
                  >
                    <InlineImageDiv
                      src={CallBlackIcon}
                      alt={'phone numeber'}
                      text={item.phone as string}
                    />
                    <InlineImageDiv
                      src={MailBlackIcon}
                      alt={'email address'}
                      text={item.email as string}
                    />
                    <InlineImageDiv
                      src={GuideBlackIcon}
                      alt={'role'}
                      text={item.role as string}
                    />
                    <InlineImageDiv
                      src={SupportAgentBlackIcon}
                      alt={'total customer'}
                      text={`현재 수강생 인원: (${item.lessonCustomer} / ${item.totalCustomer})`}
                    />
                  </div>
                  <div
                    className={flex({
                      justifyContent: 'center',
                      gap: '8px',
                      margin: '16px 0 0 0',
                    })}
                  >
                    <Button
                      label="삭제하기"
                      variant="radiusBtn"
                      css={{
                        border: 0,
                        backgroundColor: 'var(--red200)',
                        color: 'var(--white100)',
                        padding: '8px 20px',
                        fontSize: '0.95rem',
                      }}
                    />
                    <Button
                      label="상세보기"
                      variant="radiusBtn"
                      css={{
                        border: 0,
                        backgroundColor: 'var(--business-color)',
                        color: 'var(--white100)',
                        padding: '8px 20px',
                        fontSize: '0.95rem',
                      }}
                    />
                  </div>
                </div>
              </CardList>
            );
          })}
        </ul>
      ) : (
        <div
          className={css({
            height: '20vh',
            borderRadius: '25px',
          })}
        >
          <NoResult
            description={'아직 코치님이 존재하지 않아요.'}
            margin="16px 0 0 0"
          />
        </div>
      )}
    </>
  );
};

export default CoachList;
