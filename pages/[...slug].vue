<template>
  <main>
    <div class="container max-w-[600px] py-10 mx-auto">
      <ContentDoc>
        <template #empty>
          <h1>此頁面尚未完成</h1>
        </template>
        <template #not-found>
          <h1>無此頁面喔!!</h1>
        </template>
      </ContentDoc>
    </div>
    
  </main>
</template>