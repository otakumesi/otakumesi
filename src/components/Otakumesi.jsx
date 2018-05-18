import { h, Component } from 'ink'
import SelectInput from 'ink-select-input'
import opn from 'opn'

const Profile = () => {
  const handleSelect = item => {
    opn(item.value)
  }

  const items = [
    {
      label: 'Site',
      value: 'https://otakumesi.io'
    },
    {
      label: 'Github',
      value: 'https://github.com/otakumesi'
    },
    {
      label: 'Qiita',
      value: 'https://qiita.com/otakumesi'
    },
    {
      label: 'Twitter',
      value: 'https://twitter.com/otakumesi'
    }
  ]

  return <SelectInput items={items} onSelect={handleSelect} />
}

class Otakumesi extends Component {
  render() {
    return (
      <div>
      Hi, My name is Otakumesi!!!<br />
      <Profile />
      </div>
    )
  }
}

export default Otakumesi
