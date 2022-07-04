function run() {
	const youtubeIDs = [
		"G-36mO0dRjo",
		"6pbreU5ChmA",
		"xbs7FT7dXYc",
		"r7FJgs2Kx4Y",
		"xWMfqMf6fK0",
		"DXUAyRRkI6k",
		"P3h45znNqCQ",
		"jHWKtQHXVJg",
		"7zIQ3pB1zSE",
		"ax-8laei90w",
		"ngMm87S3zdQ",
		"dip2w_rGzn0",
		"dxD3kSPaOac",
		"fKhW2UJ0534",
		"hDJkFLnmFHU",
		"6nBs_yRqg4w",
		"dpvUQagTRHM",
		"qM9YWm6T_hc"
	];

	const chunked = _.chunk(youtubeIDs, 3);
	const container = document.querySelector("#youtube-container");

	for (const ids of chunked) {
		const row = $(`<div class="row" />`);
		row.appendTo(container);

		for (const id of ids) {
			const video = $(`<div class="video" />`);
			row.append(video);

			const player = new window.YT.Player(video.get(0), {
				videoId: id,
				//width: video.width(),
				//height: video.height(),
				playerVars: {
					autohide: 1,
					modestbranding: 1,
					rel: 0,
					fs: 0,
					wmode: "opaque",
				}
			});
		}
	}
}

$.getScript("https://www.youtube.com/iframe_api").then(() => {
	window.YT.ready(run);
});
