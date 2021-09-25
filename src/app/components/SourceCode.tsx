import { GithubOutlined } from "@ant-design/icons"

const SourceCode = (): JSX.Element => {
  return(
    <div className="SourceCode">
      <a target="_blank" href="https://github.com/jeronimoek/search-jobs-react-app">
        <GithubOutlined style={{fontSize:70}}/>
      </a>
    </div>
  )
}

export default SourceCode