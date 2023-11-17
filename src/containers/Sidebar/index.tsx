import Avatar from '../../components/Avatar'
import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'

import { Descricao, BotaoTema, SodebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SodebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Eduardo</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        Eduuard023
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Dev Full Stack
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SodebarContainer>
  </aside>
)

export default Sidebar
