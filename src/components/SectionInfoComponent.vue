<script>
	export default {
		name: "SectionInfoComponent",
		data() {
			return {
				title: "Welcome to the Dragons' Den",
				description:
					"This is a place where you can find the best masters of the realm to guide you through your journey. You can also become a master and share your knowledge with others.",
			};
		},
	};
</script>

<template>
	<section class="section-info pb-3">
		<div class="title p-3">
			<h3 class="text-center font-medieval">
				{{ title }}
			</h3>
		</div>
		<div class="container">
			<div class="row g-3">
				<div class="col-md-6">
					<div class="card">
						<img
							src="../assets/img/startgroup.webp"
							alt="Start your group image"
							class="card-img-top" />
						<div class="card-body">
							<h5 class="card-title">Start Your Group</h5>
							<p class="card-text">
								Some quick example text to build on the card
								title and make up the bulk of the card's
								content.
							</p>
							<a href="#" class="btn">Find a Master</a>
						</div>
					</div>
				</div>
				<div class="col-md-6">
					<div class="card">
						<img
							src="../assets/img/startgroup.webp"
							alt="Start your group image"
							class="card-img-top" />
						<div class="card-body">
							<h5 class="card-title">Start Your Group</h5>
							<p class="card-text">
								Some quick example text to build on the card
								title and make up the bulk of the card's
								content.
							</p>
							<a href="#" class="btn">Find a Master</a>
						</div>
					</div>
				</div>
				<div class="col-md-12">
					<div class="card">
						<div class="card-header feed-header">
							<h5>Adventurer's Dispatch</h5>
						</div>
						<ul class="list-group list-group-flush">
							<li class="list-group-item">
								<h5 class="list-group-item-heading">
									🐉 The Great Dragon of the North
								</h5>
								<p class="list-group-item-text">
									Rumors swirl of a dragon's roar heard over
									the northern mountains. Join the quest to
									uncover its lair and secure ancient
									treasures.
								</p>
								<button class="btn-orange">
									Join the Quest
								</button>
							</li>
							<li class="list-group-item">
								<h5 class="list-group-item-heading">
									🗺️ Newly Discovered Ruins
								</h5>
								<p class="list-group-item-text">
									Ancient ruins have been uncovered, promising
									untold riches and perilous traps. Assemble
									your party and delve into the unknown.
								</p>
								<button class="btn-orange">
									Join the Quest
								</button>
							</li>
							<li class="list-group-item">
								<h5 class="list-group-item-heading">
									🎉 Festival of the Moon
								</h5>
								<p class="list-group-item-text">
									The annual festival is here, bringing
									together adventurers from all lands. Compete
									in games, share tales, and celebrate under
									the moonlight.
								</p>
								<button class="btn-orange">
									Join the Quest
								</button>
							</li>
							<li class="list-group-item">
								<h5 class="list-group-item-heading">
									🔮 Mysterious Artifact
								</h5>
								<p class="list-group-item-text">
									A powerful artifact has been found,
									emanating dark energy. Scholars and mages
									alike seek its secrets, but danger lurks for
									the unwary.
								</p>
								<button class="btn-orange">
									Join the Quest
								</button>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped lang="scss">
	@use "../scss/helpers/variables" as *;
	@use "../scss/helpers/mixins" as *;
	@import "/src/scss/components/section_info.scss";
</style>
