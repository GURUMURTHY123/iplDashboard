// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

const apiUrl = 'https://apis.ccbp.in/ipl'

class Home extends Component {
  state = {isLoading: true, teamsData: []}

  componentDidMount() {
    this.getIplTeamsData()
  }

  getFormattedData = data => ({
    id: data.id,
    name: data.name,
    teamImageUrl: data.team_image_url,
  })

  getIplTeamsData = async () => {
    const response = await fetch(apiUrl)
    const data = await response.json()
    const teamsData = data.teams
    const formattedTeamsData = teamsData.map(eachData =>
      this.getFormattedData(eachData),
    )
    this.setState({teamsData: formattedTeamsData, isLoading: false})
  }

  renderIplTeams = () => {
    const {teamsData} = this.state
    return (
      <div className="ipl-teams-container">
        <div className="ipl-logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo"
          />
          <h1 className="ipl-heading">IPL Dashboard</h1>
        </div>
        <ul className="team-cards-container">
          {teamsData.map(eachTeam => (
            <TeamCard key={eachTeam.id} teamData={eachTeam} />
          ))}
        </ul>
      </div>
    )
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="app-container">
        {isLoading ? this.renderLoader() : this.renderIplTeams()}
      </div>
    )
  }
}

export default Home
