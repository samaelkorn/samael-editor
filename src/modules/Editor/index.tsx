import { Layout } from './Layout'
import { AreaEditor } from './TipEditor/AreaEditor'
import { Panel } from './TipEditor/Panel'

import { Provider } from 'modules/Editor/TipEditor/Context'

export const Editor: React.FC = () => {

    return (
        <Provider>
            <Layout
                editor={<AreaEditor />}
                panel={<Panel />}
            />
        </Provider>
    )
}