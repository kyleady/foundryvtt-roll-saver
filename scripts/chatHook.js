game.latest_rolls = { data: { latest: [], max_history: 10 } };

Hooks.on("createChatMessage", function(entity, options, userId) {
  if(!entity.data.roll) return false;
  game.latest_rolls = game.latest_rolls || { data: { latest: [], max_history: 10 } };
  const latest_roll = {
    roll: JSON.parse(entity.data.roll),
    speaker: entity.data.speaker,
    content: entity.data.content
  };

  console.log(latest_roll)
  console.log(game.latest_rolls)
  game.latest_rolls.data.latest.unshift(latest_roll);
  const max_history = game.latest_rolls.data.max_history;
  while(game.latest_rolls.data.latest.length > max_history) {
    game.latest_rolls.data.latest.pop();
  }
});
