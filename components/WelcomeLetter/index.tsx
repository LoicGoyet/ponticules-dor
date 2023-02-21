import * as React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import {Result} from '../../data/results';
import {unwrapDate} from '../../pages/[code]';
import Card from '../Card';
import Button from '../Button';
import {formatOrdinals} from '../../utils/getTextualPosition';

type Props = {
  className?: string;
  result: Result;
};

const WelcomeLetter = ({className, result}: Props) => {
  const [shouldBeVisible, setShouldBeVisible] = React.useState(true);
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setShouldBeVisible(false);
  };

  return (
    <Letter
      className={className}
      style={{
        '--opacity': shouldBeVisible ? 1 : 0,
        '--pointerEvents': shouldBeVisible ? 'initial' : 'none',
        '--translateY': shouldBeVisible ? '0' : '-30px',
      }}
    >
      <Container>
        <Grid>
          <ShipperHeader>
            Académie des Ponticules d&apos;Or
            <br />
            17 rue du bacon, à côté du Centre E.Leclerc
            <br />
            10200 Bar-sur-Aube
          </ShipperHeader>
          <Subject>
            Object : Remise du prix « {result.category} » lors de la première cérémonie
            des Ponticules d&apos;Or
          </Subject>
          <Body>
            <p>
              {result.remitter.gender === 'female' ? 'Madame' : 'Monsieur'}{' '}
              {result.remitter.name},
            </p>
            <p>
              J&apos;ai l&apos;honneur de vous annoncer que vous avez été{' '}
              {result.remitter.gender === 'female' ? 'désignée' : 'désigné'} par
              l&apos;académie des Ponticule d&apos;Or afin de remettre le prix «
              {result.category} » lors de la première édition de la cérémonie des
              Ponticules d&apos;Or, qui aura lieu ce{' '}
              {unwrapDate.toLocaleDateString('fr-FR', {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}{' '}
              à{' '}
              {unwrapDate.toLocaleTimeString('fr-FR', {
                hour: 'numeric',
                minute: 'numeric',
              })}
              .
            </p>
            <p>
              La catégorie « {result.category} » sera la {formatOrdinals(result.order)}{' '}
              décernée durant la soirée.
            </p>
            <p>
              Ci-joint à cette lettre, vous trouverez une enveloppe rouge contenant le
              lauréat du prix « {result.category} » que vous ne pourrez ouvrir qu&apos;à
              la date de la cérémonie. Pour ouvrir cette enveloppe, vous n&apos;aurez
              qu&apos;à cliquer dessus.
            </p>
            <p>
              Cette cérémonie, à l&apos;image de tous les prix les plus prestigieux,
              suit un protocole strict. Voici les consignes pour bien remettre votre
              prix :
            </p>
            <ol>
              <li>
                Le maitre de cérémonie Tristan Clérin vous présentera en tant que{''}
                {result.remitter.gender === 'female' ? 'remettante' : 'remettant'} du
                prix « 
                {result.category} ».
              </li>
              <li>
                Avant de lister les nommé·e·s pour la categorie « {result.category} »,
                prenez une minute pour évoquer à l&apos;audience ce que cette année, ou
                particulièrement ce que ce prix vous évoque. N&apos;hésitez pas à faire
                preuve d&apos;humour !
              </li>
              <li>
                Lorsque vous aurez fini, vous pourrez introduire le clip de présentation
                des nommé·e·s par la phrase :{' '}
                <br />
                <i>Pour la categorie « {result.category} », les nommé·e·s sont :</i>
              </li>
              <li>
                Une fois le clip de présentation des nommé·e·s terminé, vous pourrez
                alors dévoiler la·le lauréat·e du prix « {result.category} » en
                commençant par prononcer la phrase :{' '}
                <br />
                <i>
                  Et la·le lauréat·e du Ponticule d&apos;Or pour la catégorie « 
                  {result.category} » est :
                </i>
              </li>
              <li>
                Enfin cliquez sur l&apos;enveloppe rouge et prononcez le résultat
                apparaissant sur le bulletin sortant de l&apos;enveloppe.
              </li>
              <li>
                Vous pouvez désormais rejoindre le public pour assister à la suite de la
                cérémonie
              </li>
            </ol>
            <p>
              Si vous avez la moindre question, n&apos;hésitez à contacter
              l&apos;Académie des Ponticules d&apos;Or directement sur Discord. Nous
              avons hâte de vivre avec vous cette soirée inoubliable !
            </p>
          </Body>
          <Greetings>
            Je vous prie d’agréer mes salutations les plus distinguées
          </Greetings>

          <EnveloppeButton onClick={handleButtonClick}>
            Voir l&apos;enveloppe
          </EnveloppeButton>

          <Signature>
            <Image
              src="/images/sylvie-signature.png"
              alt="Signature de Sylvie Ponticule"
              width={200}
              height={86.83274021}
            />
            Sylvie Ponticule,
            <br />
            présidente de l&apos;Académie des Ponticules d&apos;Or
          </Signature>
        </Grid>
      </Container>
    </Letter>
  );
};

export default WelcomeLetter;

const Letter = styled(Card)<{
  style: {
    '--opacity': number;
    '--pointerEvents': string;
    '--translateY': string;
  };
}>`
  --padding: 2rem;
  position: fixed;
  z-index: 4;
  width: calc(100vw - 2rem);
  max-width: 60rem;
  max-height: calc(100vh - 2rem);
  padding: 0;
  opacity: var(--opacity);
  pointer-events: var(--pointerEvents);
  transform: translateY(var(--translateY));
  transition-property: opacity, transform;
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;

  @media (max-width: 600px) {
    --padding: 1rem;
  }
`;

const Container = styled.div`
  font-size: 1rem;
  overflow: auto;
  height: calc(100vh - calc(calc(var(--padding) * 2) + 4rem));
  padding: calc(var(--padding));
  margin: calc(var(--padding));
`;

const Grid = styled.div`
  display: flex;
  flex-direction: column;
`;

const ShipperHeader = styled.address`
  align-self: flex-end;
  margin: 6rem 0;
`;

const Subject = styled.div`
  font-weight: bold;
  margin-bottom: 2rem;
`;

const Body = styled.div`
  p {
    margin: 1rem 0;
  }

  ol li {
    margin: 0.75rem 0;
  }
`;

const Greetings = styled.p`
  font-style: italic;
  margin: 2rem 0;
`;

const Signature = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  align-self: flex-end;
  text-align: center;
`;

const EnveloppeButton = styled(Button)`
  margin: 3rem 0;
  align-self: center;
`;
