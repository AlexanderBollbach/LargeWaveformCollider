import React from "react";
import styles from "./Stats.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//selectors
import { selectStatsToShow } from "_redux/reducers/Waveform";
// action creators 
import { toggleMoreStats } from '_redux/actions/Waveform'

const Stat = ({ name, value }) => (
	<div className={styles.Stat}>
		<div>{name}</div>
		<div>{roundThousandth(value)}</div>
	</div>
);

const WaveformStats = ({statsToShow, id, toggleMoreStats}) => (
	<div 
	onClick={
		() => toggleMoreStats(id)
	}
	className={styles.Main}>
		{
			statsToShow.map((stat, idx) => {
			const firstKey = Object.keys(stat)[0];
			return <Stat key={firstKey} name={firstKey} value={stat[firstKey]} />
		})
	}
	</div>
);

const mapStateToProps = (state, ownProps) => {
	return {
		statsToShow: selectStatsToShow(state.waveforms.byId[ownProps.id])
	};
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators({toggleMoreStats}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WaveformStats);

function roundThousandth(num) {
	return Math.round(num * 1000) / 1000;
}