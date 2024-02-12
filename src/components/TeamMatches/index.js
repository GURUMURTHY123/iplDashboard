// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {isLoading: true, teamMatchesData: []}

  componentDidMount() {
    this.getSpecificTeamData()
  }

  getFormattedData = data => ({
    umpires: data.umpires,
    result: data.result,
    manOfTheMatch: data.man_of_the_match,
    id: data.id,
    date: data.date,
    venue: data.venue,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    firstInnings: data.first_innings,
    secondInnings: data.second_innings,
    matchStatus: data.match_status,
  })

  getSpecificTeamData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.teamName = id
    const url = `https://apis.ccbp.in/ipl/${this.teamName}`
    const response = await fetch(url)
    const data = await response.json()
    const formattedTeamData = {
      latestMatchDetails: this.getFormattedData(data.latest_match_details),
      recentMatches: data.recent_matches.map(eachMatch =>
        this.getFormattedData(eachMatch),
      ),
      teamBannerUrl: data.team_banner_url,
    }
    this.setState({teamMatchesData: formattedTeamData, isLoading: false})
  }

  renderLatestMatch = latestMatchDetails => (
    <LatestMatch
      key={latestMatchDetails.id}
      latestMatchData={latestMatchDetails}
    />
  )

  renderMatchCards = recentMatchesData => (
    <ul className="match-cards-container">
      {recentMatchesData.map(eachMatch => (
        <MatchCard key={eachMatch.id} recentMatch={eachMatch} />
      ))}
    </ul>
  )

  renderTeam = () => {
    const {teamMatchesData} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamMatchesData
    return (
      <div className="team-details-container">
        <img src={teamBannerUrl} alt="team banner" className="banner-image" />
        {this.renderLatestMatch(latestMatchDetails)}
        {this.renderMatchCards(recentMatches)}
      </div>
    )
  }

  renderTeamLoader = () => (
    <div data-testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className={`${this.teamName}`}>
        {isLoading ? this.renderTeamLoader() : this.renderTeam()}
      </div>
    )
  }
}

export default TeamMatches
