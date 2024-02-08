<script setup lang="ts">
import { ref } from 'vue'
import Menubar from 'primevue/menubar'

const scrollToSection = (sectionId: string) => {
	const section = document.querySelector(sectionId)
	if (section) {
		section.scrollIntoView({ behavior: 'smooth' })
	}
}

const items = ref([
	{ label: 'Главное', command: () => scrollToSection('#main') },
	{ label: 'Наши преимущества', command: () => scrollToSection('#advantages') },
	{ label: 'Ассортимент', command: () => scrollToSection('#catalog') },
	{ label: 'Отзывы', command: () => scrollToSection('#reviews') },
	{ label: 'Бренды', command: () => scrollToSection('#brands') },
	{ label: 'Контакты', command: () => scrollToSection('#contacts') },
])
</script>

<template>
	<header class="header mt-6">
		<div class="header__container container mx-auto">
			<nav
				class="header__nav flex items-center min-[1035px]:justify-between"
				aria-label="Основная навигация"
			>
				<NuxtImg
					src="/logo.png"
					format="webp"
					width="100"
					alt="Логотип Профилайн - производитель лакокрасочных материалов"
				/>
				<Menubar
					:model="items"
					class="p-menubar-mobile header__menu"
					breakpoint="1035px"
				/>
				<div class="header__contacts flex flex-col ms-auto min-[1035px]:ms-0">
					<a href="tel:+77018888055">8 (701) 888-80-55</a>
					<a href="tel:+77272638499">8 (727) 263-84-99</a>
				</div>
			</nav>
		</div>
	</header>
</template>

<style lang="scss" scoped>
::v-deep(.p-menubar .p-menuitem) {
	margin: 0;
}

::v-deep(.p-menubar) {
	background-color: transparent !important;
	border: none !important;
	margin: 0;
}

@media (min-width: 0px) {
	::v-deep(.p-menubar.p-menubar-mobile .p-menubar-root-list) {
		width: calc(100vw - 100%);
		max-width: 150px;
	}
}

@media (min-width: 350px) {
	::v-deep(.p-menubar.p-menubar-mobile .p-menubar-root-list) {
		max-width: 200px;
	}
}

::v-deep(.p-menubar.p-menubar-mobile .p-menubar-root-list) {
	border-radius: 5px !important;
}

@media (min-width: 1035px) {
	::v-deep(.p-menubar.p-menubar-mobile .p-menubar-root-list) {
		position: relative !important;
		display: flex !important;
		width: 100% !important;
		flex-wrap: nowrap !important;
		max-width: 100% !important;
		box-shadow: none !important;
	}

	::v-deep(.p-menubar.p-menubar-mobile .p-menubar-button) {
		display: none !important;
	}

	::v-deep(.p-menubar.p-menubar-mobile .p-menubar-root-list .p-menuitem) {
		width: auto !important;
	}
}
</style>
