<template>
  <el-row>
    <el-col :span="5">
      <IndexMapItem name="集章区" :detail="details.main" class="h-12 main" />
    </el-col>
    <el-col :span="5">
      <IndexMapItem name="活动" :detail="details.sub" class="h-12 sub" />
    </el-col>
    <el-col :span="5">
      <IndexMapItem name="展区" :detail="details.out" class="h-12 out" />
    </el-col>
    <el-col :span="5">
      <IndexMapItem name="游卡" :detail="details.yoka" class="h-12 yoka" />
    </el-col>
  </el-row>

  <el-divider />

  <el-row :gutter="20">
    <el-col :span="6">
      <IndexMapItem name="调音" class="h-20 bg-gray" />
    </el-col>
    <el-col :span="9">
      <IndexMapItem name="主舞台" img="/stage.png" class="h-10 bg-gray" />
    </el-col>
    <el-col :span="6">
      <IndexMapItem name="休息" class="h-30 bg-gray" />
      <IndexMapItem name="COS" img="/cosplay.png" class="h-10 main" />
    </el-col>
  </el-row>

  <el-row :gutter="20">
    <el-col :span="6">
      <IndexMapItem name="展区" class="h-20 out" />
      <IndexMapItem name="桌游区" img="/game.png" class="h-20 main" />
    </el-col>
    <el-col :span="9">
      <IndexMapItem name="Nova独游社" class="h-10 sub" />
      <IndexMapItem name="展区" class="h-30 out" />
    </el-col>
    <el-col :span="6">
      <IndexMapItem name="动漫研" img="/anime.png" class="h-20 main" />
      <IndexMapItem name="宝可梦" class="h-9 sub" />
      <IndexMapItem name="轻文区" img="/novel.png" class="h-9 main" />
    </el-col>
  </el-row>

  <el-row :gutter="20">
    <el-col :span="6">
      <IndexMapItem name="思辨社" class="h-20 sub" />
      <IndexMapItem name="万智牌" class="h-9 sub" />
      <IndexMapItem name="游卡" class="h-9 yoka" />
    </el-col>
    <el-col :span="9">
      <IndexMapItem name="展区" class="h-43 out" />
    </el-col>
    <el-col :span="6">
      <IndexMapItem name="音游区" img="/music.png" class="h-20 main" />
      <IndexMapItem name="模玩区" img="/model.png" class="h-20 main" />
    </el-col>
  </el-row>

  <el-row :gutter="20">
    <el-col :span="6">
      <IndexMapItem name="游卡" class="h-43 yoka" />
    </el-col>
    <el-col :span="9">
      <IndexMapItem name="展区" class="h-43 out" />
    </el-col>
    <el-col :span="6">
      <IndexMapItem name="*V家" img="/vocal.png" class="h-20 main" />
      <IndexMapItem name="*东方" img="/touhou.png" class="h-20 main" />
    </el-col>
  </el-row>

  <el-row :gutter="20">
    <el-col :span="6">
      <IndexMapItem name="游卡" class="h-20 yoka" />
    </el-col>
    <el-col :span="9">
      <IndexMapItem name="兑奖区" :detail="details.reward" class="h-15 sub" />
    </el-col>
    <el-col :span="6">
      <IndexMapItem name="绘画区" img="/draw.png" class="h-20 out" />
      <IndexMapItem name="入口" class="h-15 bg-gray" />
    </el-col>
  </el-row>

</template>

<script setup lang="ts">
const details = {
  main: '您将在入口处领取一本集章册，满足"集章区域"的活动需求获得印章，集齐印章后则可以前往兑奖区领取常规奖励。',
  sub: '这些活动区域代表没有印章的相关活动，也祝愿您在这些区域玩的开心。',
  out: '其它动漫社团的合作展区，参阅集章册背面获取完整列表。',
  yoka: '游卡合作提供的活动摊位，也可以参与获取相关奖励。',
  reward: '在此凭印章领取奖品：1-5个印章可获得明信片、文件夹，6-9个印章可获得明信片、文件夹、钥匙扣。 集齐印章后可以选择参与最终考验，通过考验则可以获得精美的考验奖品。（如手办等）'
}
</script>


<style scoped>
.ep-row {
  margin-top: 20px;
  justify-content: space-between;
}
</style>