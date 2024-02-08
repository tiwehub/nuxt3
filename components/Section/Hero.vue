<script setup lang="ts">
import Button from 'primevue/button'
</script>

<template>
	<section id="HeroSection">
		<div
			class="container mx-auto flex items-center justify-between flex-col-reverse sm:flex-row mt-8 pb-6"
		>
			<div class="space-y-4 sm:w-1/2">
				<h2
					class="sm:text-1xl md:text-2xl font-semibold text-center sm:text-left"
				>
					Лакокрасочные материалы, инструменты и оборудование для кузовного
					ремонта автомобилей со скидкой 30% от ведущих производителей
				</h2>
				<Button label="Оставить заявку" class="w-full sm:w-auto" />
			</div>
			<div class="relative max-w-xs md:max-w-sm lg:max-w-md">
				<NuxtImg
					src="/carbanner.png"
					format="webp"
					alt="Автомобиль c лакокрасочными материалами"
					width="567"
					height="290"
				/>
				<NuxtImg
					src="/lacquer1.png"
					format="webp"
					alt="Лакокрасочный материал"
					class="absolute right-7 bottom-0"
					width="101"
					height="194"
				/>
				<NuxtImg
					src="/lacquer2.png"
					format="webp"
					alt="Лакокрасочный материал"
					class="absolute right-9 bottom-0"
					width="59"
					height="97"
				/>
			</div>
		</div>
	</section>
</template>

<style scoped></style>

<style lang="scss" scoped>
[data-error='1'] {
	display: none !important;
}
</style>
