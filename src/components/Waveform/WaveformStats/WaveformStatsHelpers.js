
export function constructStats(props) {
	const {
		selectedSample,
		samplesOnScreen,
		zoom,
		offset,
		focus,
		startingSample,
		endingSample,
		samplesOffset,
		selectedSampleOffset
	} = props;

	var stats = [];

	stats.push({
		name: "offset decimal",
		value: offset
	});
	stats.push({ name: "num samples offset", value: samplesOffset });

	stats.push({ name: "starting sample", value: startingSample });
	stats.push({ name: "ending sample", value: endingSample });

	stats.push({
		name: "focus",
		value: focus
	});

	stats.push({
		name: "selected sample offset",
		value: selectedSampleOffset
	});

	stats.push({ name: "selected sample", value: selectedSample });

	stats.push({ name: "zoom", value: zoom });
	stats.push({ name: "samples on screen", value: samplesOnScreen });

	stats = stats.map(stat => {
		return { name: stat.name, value: stat.value };
	});

	return stats;
}